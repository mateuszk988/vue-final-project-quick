/* eslint-disable */
import { Server, Model, Factory, hasMany, RestSerializer } from "miragejs";

const IdSerializer = RestSerializer.extend({
  serializeIds: "always",
});

const rng = () => Math.random();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(rng() * (max - min + 1)) + min;
}

const randomFromArray = (array) => {
  const index = getRandomInt(0, array.length - 1);
  return array[index];
};

const todoTemplates = [
  { base: "Buy $THING", values: ["milk", "bread", "cheese", "toys"] },
  { base: "Clean $THING", values: ["house", "yard", "bedroom", "car"] },
  { base: "Read $THING", values: ["newspaper", "book", "email"] },
];

const generateTodoText = () => {
  const template = randomFromArray(todoTemplates);
  const value = randomFromArray(template.values);
  return template.base.replace("$THING", value);
};

new Server({
  routes() {
    this.namespace = "fakeApi";
    this.timing = 2000;

    this.resource("todos");
    this.resource("lists");

    const server = this;

    this.post("/todos", function (schema, req) {
      const data = this.normalizedRequestAttrs();

      if (data.text === "error") {
        throw new Error("Could not save the todo!");
      }

      const result = server.create("todo", data);
      return result;
    });
  },
  models: {
    todo: Model.extend({}),
    list: Model.extend({
      todos: hasMany(),
    }),
  },
  factories: {
    todo: Factory.extend({
      id(i) {
        return Number(i);
      },
      text() {
        return generateTodoText();
      },
      completed() {
        return false;
      },
      color() {
        return "";
      },
    }),
  },
  serializers: {
    todo: IdSerializer.extend({
      serialize(object, request) {
        const numerifyId = (todo) => {
          todo.id = Number(todo.id);
        };
        let json = IdSerializer.prototype.serialize.apply(this, arguments);

        if (json.todo) {
          numerifyId(json.todo);
        } else if (json.todos) {
          json.todos.forEach(numerifyId);
        }

        return json;
      },
    }),
    list: IdSerializer,
  },
  seeds(server) {
    server.createList("todo", 5);
  },
});
