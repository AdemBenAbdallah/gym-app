import { resolver } from "@blitzjs/rpc";

export default resolver.pipe(resolver.authorize, async () => {
  const todos = [{ title: "buy beard", id: 1 }, { title: "buy a coffe" }, { title: "buy a tea" }];

  return todos;
});
