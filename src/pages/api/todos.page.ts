export default function handler(req, res) {
  res.status(200).json({
    Todos: [{ title: "buy beard" }, { title: "buy a coffe" }, { title: "buy a tea" }],
  });
}
