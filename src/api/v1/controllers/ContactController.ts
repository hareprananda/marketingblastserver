import express from "express";
import ContactModel from "../models/Contact.model";
import { RouteCB } from "../types/Api";
function ContactController() {
  const getContact: RouteCB = async (req, res) => {
    const data = await ContactModel.find({});
    res.json(data);
  };

  const getSingleContact: RouteCB = async (req, res) => {
    const { id } = req.params;

    try {
      const data = await ContactModel.findOne({ _id: id });
      res.json(data);
    } catch (err) {
      res.status(404).send("Not found");
    }
  };
  const addContact: RouteCB = async (req, res) => {
    try {
      console.log(req.body);
      const newData = await ContactModel.create(req.body);

      res.json(newData);
    } catch (err) {
      res.status(400).send("Please provide correct data");
    }
  };
  const updateContact: RouteCB = async (req, res) => {
    const { id } = req.params;
    const updated = req.body;

    try {
      const updatedData = await ContactModel.updateOne(
        { _id: id as string },
        updated
      );
      res.json("update success");
    } catch (err) {
      res.status(400).send("Please provide correct data");
    }
  };
  const deleteContact: RouteCB = async (req, res) => {
    const { id } = req.params;

    try {
      ContactModel.deleteOne({ _id: id });

      res.json("Delete success");
    } catch (err) {
      res.status(404).send("Not found");
    }
  };

  return {
    getContact,
    addContact,
    updateContact,
    deleteContact,
    getSingleContact,
  };
}

export default ContactController();
