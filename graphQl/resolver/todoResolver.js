import ToDo from "../../model/todoSchema";

const addToDo = async (_, args, context) => {
  // console.log("🚀 ~ addToDo ~ args:", args);
  try {
    const data = new ToDo(args.input);
    if (!data) return new Error("data not added");
    await data.save();
    data.message = "added successfully";
    return data;
  } catch (error) {
    console.log("🚀 ~ addToDo ~ error:", error);
  }
};

const getToDo = async (_, args, context) => {
  try {
    const data = await ToDo.find({});
    // console.log("🚀 ~ getToDo ~ data:", data);
    if (!data) return new Error("data not found");
    return data;
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
};

const updateToDo = async (_, args, context) => {
  const { _id, title } = args.input;
  try {
    const updateData = await ToDo.findByIdAndUpdate(
      { _id },
      { title },
      { new: true }
    );
    if (!updateData) return new Error("data not found");
    updateData.message = "update successfully";
    return updateData;
  } catch (error) {
    console.log("🚀 ~ updateToDo ~ error:", error);
  }
};

const deleteToDo = async (_, args, context) => {
  console.log("🚀 ~ deleteToDo ~ args:", args);
  try {
    const data = await ToDo.findByIdAndDelete({ _id: args._id });

    if (!data) return new Error("data not found");
    data.message = "deleted";
    return data;
  } catch (error) {
    console.log("🚀 ~ deleteToDo ~ error:", error);
  }
};

const todoResolver = {
  Query: {
    getToDo,
  },
  Mutation: {
    addToDo,
    updateToDo,
    deleteToDo,
  },
};

export default todoResolver;
