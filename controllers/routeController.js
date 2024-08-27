const GET_COMPOSE = (req, res) => {
  res.render("Compose", {
    title: "Compose",
  });
};

const GET_HOME = (req, res) => {
  res.render("Home", {
    title: "Home",
  });
};

export default {
  GET_COMPOSE,
  GET_HOME,
};
