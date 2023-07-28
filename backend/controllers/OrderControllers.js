import Order from "../models/order";

export const postOrder = async (req, res) => {
  try {
    const selectedProductsData = req.body;

    await Order.insertMany(selectedProductsData);

    res
      .status(200)
      .json({ message: "Selected products data saved successfully!" });
  } catch (error) {
    console.error("Error saving selected products data:", error);
    res.status(500).json({ error: "An error occurred while saving the data." });
  }
};
