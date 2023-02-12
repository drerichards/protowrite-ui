import React, { useState } from "react";
import axios from "axios";
import { BACKEND_API_URL } from "utils/constants";

const CreateStory = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    name: "",
    image: null,
    members: [""],
  });

  const handleChange = (e, index) => {
    switch (e.target.name) {
      case "image":
        setFormData({ ...formData, image: e.target.files[0] });
        break;
      case "members":
        const updatedMembers = formData.members.map((member, i) => {
          if (index === i) {
            return e.target.value;
          }
          return member;
        });
        setFormData({ ...formData, members: updatedMembers });
        break;
      default:
        setFormData({ ...formData, [e.target.name]: e.target.value });
        break;
    }
  };

  const handleAddMember = () => {
    setFormData({ ...formData, members: [...formData.members, ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_API_URL}/`, formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
      <div className="max-w-5xl pb-8">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="border border-gray-400 p-2 w-full"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="image"
          >
            Image
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
          />
        </div>
        {formData.members.map((member, index) => (
          <div className="mb-4" key={index}>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor={`member-${index}`}
            >
              Member {index + 1}
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="members"
              id={`member-${index}`}
              value={member}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
        ))}
        <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleAddMember}
        >
          Add Member
        </button>
      </div>
      <button className="bg-indigo-500 text-white py-2 px-4 rounded">
        Create Story
      </button>
    </form>
  );
};

export default CreateStory;
