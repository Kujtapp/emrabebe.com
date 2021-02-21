export default function ({ store, app, redirect }) {
  if(app.$auth.loggedIn && app.$auth.user.role !== "admin") {
      return redirect('/');
  }
}
