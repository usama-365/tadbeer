const PATHS = {
  home() {
    return "/";
  },
  signUp() {
    return "/sign-up";
  },
  signIn() {
    return "/sign-in";
  },
  organization(id?: string) {
    return `/organization/${id ? id : ":id"}`;
  },
  selectOrganization() {
    return "/select-org";
  },
};

export default PATHS;
