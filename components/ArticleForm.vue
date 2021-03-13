<template>

    <div class="mt-5">
      <form @submit.prevent="onSubmit">
        <div class="row">
          <div class="col-md-8 col-md-8 col-lg-8">
            <div class="form-group">
              <input type="text" placeholder="Title" :value="article.title" @input="updateTitle" name="title" class="form-control" required>
<!--                <Slug url="www.website.com" sub-directory="blog" title="article title"></Slug>-->
              <span>{{ article.slug }}</span>
            </div>
            <div class="form-group">

                <editor-menu-bar :editor="editor" v-slot="{ commands, isActive, getMarkAttrs }">
                  <div class="menubar">
                  <font-awesome-icon fas icon="bold" :class="{ 'is-active': isActive.bold() }" @click="commands.bold" title="bold"/>
                  <font-awesome-icon fas icon="italic" :class="{ 'is-active': isActive.italic() }" @click="commands.italic" title="italic"/>
                  <font-awesome-icon fas icon="underline" :class="{ 'is-active': isActive.underline() }" @click="commands.underline" title="underline"/>
                  <font-awesome-icon fas icon="quote-right" :class="{ 'is-active': isActive.blockquote() }" @click="commands.blockquote" title="quote"/>
                  <font-awesome-icon fas icon="list-ol" :class="{ 'is-active': isActive.ordered_list() }" @click="commands.ordered_list" title="list ol"/>
                  <font-awesome-icon fas icon="list-ul" :class="{ 'is-active': isActive.bullet_list() }" @click="commands.bullet_list" title="list ul"/>
                  <font-awesome-icon fas icon="code" :class="{ 'is-active': isActive.code() }" @click="commands.code" title="code"/>
                  <font-awesome-icon far icon="file-code" :class="{ 'is-active': isActive.code_block() }" @click="commands.code_block" title="code block"/>
                  <font-awesome-icon fas icon="arrows-alt-h" @click="commands.horizontal_rule" title="horizonal rule"/>
                  <font-awesome-icon fas icon="paragraph" :class="{ 'is-active': isActive.paragraph() }" @click="commands.paragraph" title="paragraph"/>

                  <span :class="{ 'is-active': isActive.heading({ level: 1 }) }" @click="commands.heading({ level: 1})" title="headline 1">h1</span>
                  <span :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click="commands.heading({ level: 2})" title="headline 2">H2</span>
                  <span :class="{ 'is-active': isActive.heading({ level: 3 }) }" @click="commands.heading({ level: 3})" title="headline 3">H3</span>

                  <form class="menububble__form" v-if="linkMenuIsActive" @submit.prevent="setLinkUrl(commands.link, linkUrl)">
                    <input class="menububble__input" type="text" v-model="linkUrl" placeholder="https://" ref="linkInput" @keydown.esc="hideLinkMenu"/>
                    <font-awesome-icon fas icon="unlink" @click="setLinkUrl(commands.link, null)" title="link" />
                  </form>

                  <template v-else>
                    <font-awesome-icon fas icon="link" @click="showLinkMenu(getMarkAttrs('link'))" :class="{ 'is-active': isActive.link() }" title="link"/>
                  </template>

                    <font-awesome-icon far icon="undo" @click="commands.undo" title="undo"/>
                    <font-awesome-icon far icon="redo" @click="commands.redo" title="redo" />

                  </div>
                </editor-menu-bar>
                <editor-content class="editor__content" :editor="editor" />

            </div>

          </div>

          <div class="col-sm-4 col-md-4 col-lg-4">
            <div class="published-wrapper">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="Published" :checked="article.is_public" :value="article.is_public" @change="updateIsPublic($event.target.checked)">
                <label class="form-check-label" for="Published">Public</label>
              </div>
            </div>
            <!--          <div class="article-photo">-->
            <!--            <div class="form-group">-->
            <!--              <picture v-show="article.photo">-->
            <!--                <img :src="article.photo" alt="article photo" class="img-fluid img-thumbnail" width="150px">-->
            <!--              </picture>-->
            <!--              <label for="FormControlUserPhoto">Add Article Photo</label>-->
            <!--              <input type="file" class="form-control-file" id="FormControlUserPhoto" @change="createArticlePhoto">-->
            <!--            </div>-->
            <!--          </div>-->

            <div class="category-wrapper">
              <label>Add category to Article</label>
                          <categories :cat="article.category_id"></categories>
            </div>

            <button :disabled="inProgress" type="submit" class="btn btn-primary mt-3">Submit
              <!--            <Spinner v-if="inProgress" class="Spinner-mini Spinner-color-white" />-->
            </button>
          </div>
        </div>
      </form>

    </div>
</template>

<script>

  import {mapActions, mapGetters} from "vuex";
  import Categories from '~/components/categories';
  import Slug from '~/components/Slug';
  import { Editor, EditorMenuBar, EditorContent} from 'tiptap';
  import {CodeBlockHighlight, Blockquote, BulletList, CodeBlock, Heading, ListItem, OrderedList, Bold, Code, Italic, Link, HorizontalRule, Underline, History,} from 'tiptap-extensions';
  import javascript from 'highlight.js/lib/languages/javascript';
  import css from 'highlight.js/lib/languages/css';

export default {
  name: "ArticleForm",
  layout: 'adminPanel',
  middleware: 'admin',
  components: {Categories, EditorMenuBar, EditorContent},

  data() {
    return {
      inProgress: false,
      errors: {},
      id: this.$route.params.id,
      action: '',
      actionMessage: '',
      newContent: '',
      linkUrl: null,
      linkMenuIsActive: false,
      editor: new Editor({
        extensions: [
          new CodeBlockHighlight({
            languages: {
              javascript,
              css,
            },
          }),
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new Link(),
          new HorizontalRule(),
          new Bold(),
          new Code(),
          new Italic(),
          new Underline(),
          new History(),
        ],
        onUpdate: ({ getHTML }) => {
          this.newContent = getHTML();
        },
        content: 'new content',
      }),
    }
  },

  watch: {
    newContent(val) {
      this.$store.commit('articles/UPDATE_CONTENT', val);
    }
  },
  methods: {
    ...mapActions(['articles/CREATE_ARTICLE', 'articles/UPDATE_ARTICLE']),

    updateTitle (e) {
      this.$store.commit('articles/UPDATE_TITLE', e.target.value);
    },
    updateIsPublic (e) {
      this.$store.commit('articles/UPDATE_IS_PUBLIC', e);
    },

    onSubmit() {
      if (this.id) {
        this.action = 'articles/' + 'UPDATE_ARTICLE';
        this.actionMessage = 'Updated'
      } else {
        this.action = 'articles/' + 'CREATE_ARTICLE';
        this.actionMessage = 'Created';
      }

      this.inProgress = true;
      this.$store.dispatch(this.action)
        .then( () => {
          this.inProgress = false;
          this.$swal.fire(
            this.actionMessage,
            'Article Has been' + this.actionMessage,
            'success'
          );
          this.$router.push('/admin/articles');
        })
        .catch(({ response }) => {
          this.inProgress = false;
          if (response?.data?.errors) {
            this.errors = response?.data?.errors
          } else {
            this.errors = response?.data
          }
          console.log('you have an error on creating an Article');
        })
    },

    showLinkMenu(attrs) {
      this.linkUrl = attrs.href;
      this.linkMenuIsActive = true;
      this.$nextTick(() => {
        this.$refs.linkInput.focus()
      })
    },
    hideLinkMenu() {
      this.linkUrl = null;
      this.linkMenuIsActive = false
    },
    setLinkUrl(command, url) {
      command({ href: url });
      this.hideLinkMenu();
    },

  },
  computed: {
    ...mapGetters({
      article: 'articles/article'
    }),
  },

  created() {
    if (this.id) {
      this.editor.setContent(this.article.content);
    }
  },

  beforeDestroy() {
    this.$store.commit('articles/RESET_ARTICLE');
    this.editor.destroy()
  }

}
</script>

<style scoped lang="scss">
  .menubar :is(svg, span) {
    margin: 0 5px;
  }
  .menubar :is(svg, span):hover {
    color: red;
    cursor: pointer;
  }

  pre {
    &::before {
      content: attr(data-language);
      text-transform: uppercase;
      display: block;
      text-align: right;
      font-weight: bold;
      font-size: 0.6rem;
    }
    code {
      .hljs-comment,
      .hljs-quote {
        color: #999999;
      }
      .hljs-variable,
      .hljs-template-variable,
      .hljs-attribute,
      .hljs-tag,
      .hljs-name,
      .hljs-regexp,
      .hljs-link,
      .hljs-name,
      .hljs-selector-id,
      .hljs-selector-class {
        color: #f2777a;
      }
      .hljs-number,
      .hljs-meta,
      .hljs-built_in,
      .hljs-builtin-name,
      .hljs-literal,
      .hljs-type,
      .hljs-params {
        color: #f99157;
      }
      .hljs-string,
      .hljs-symbol,
      .hljs-bullet {
        color: #99cc99;
      }
      .hljs-title,
      .hljs-section {
        color: #ffcc66;
      }
      .hljs-keyword,
      .hljs-selector-tag {
        color: #6699cc;
      }
      .hljs-emphasis {
        font-style: italic;
      }
      .hljs-strong {
        font-weight: 700;
      }
    }
  }
</style>
