<template>
  <div class="container mt-5">
    <h3>Users</h3>
<!--    <div v-for="user in users" :key="user.id">-->
<!--      <nuxt-link :to="`/users/${user.id}`"> {{ user.name }}</nuxt-link>-->
<!--    </div>-->

    <b-row>
      <b-col lg="5" class="my-1">
        <b-form-group
          label="Filter"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col sm="5" md="6" class="my-1">
        <b-form-group
          label="Per page"
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>

    <b-table striped hover
             :items="users"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             responsive="sm">

    </b-table>

    <b-row>
      <b-col sm="7" md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>

  </div>
</template>

<script>
  import {mapGetters} from "vuex";

    export default {
      name: "index",
      layout: 'adminPanel',
      middleware: 'admin',

      data() {
        return {
          fields: [
            {
              key: 'name',
              sortable: true
            },
            {
              key: 'email',
              sortable: false
            },
            {
              key: 'created_at',
              label: 'Registered',
              sortable: true,
            }
          ],
          currentPage: 1,
          totalRows: 1,
          perPage: 5,
          filter: null,
          pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
        }
      },

      computed: {
        ...mapGetters({
          users: 'users/users'
        }),
      },
      async fetch({store}) {
        // try {
          await store.dispatch('users/ALL_USERS');
          // this.isBusy = false
        // }
        // catch (e) {
        //   console.log('dispatch to store not possible',);
        //   this.isBusy = false
        // }
      }

    }
</script>

<style scoped>

</style>
