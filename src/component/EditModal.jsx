"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";

import { BiEdit } from "react-icons/bi";
import { useState } from "react";

const amenitiesList = [
  "Whiteboard",
  "Projector",
  "WiFi",
  "Power Outlets",
  "Quiet Zone",
  "Air Conditioning",
];

export function EditModal({ room }) {
  const {
    _id,
    image,
    hourlyRate,
    name,
    capacity,
    description,
    floor,
    amenities,
  } = room;

  const [selectedAmenities, setSelectedAmenities] =
    useState(amenities || []);

  const handleAmenities = (value) => {
    if (selectedAmenities.includes(value)) {
      setSelectedAmenities(
        selectedAmenities.filter(
          (item) => item !== value
        )
      );
    } else {
      setSelectedAmenities([
        ...selectedAmenities,
        value,
      ]);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const updatedRoom = {
      name: form.name.value,
      image: form.image.value,
      floor: form.floor.value,
      capacity: form.capacity.value,
      hourlyRate: form.hourlyRate.value,
      description: form.description.value,
      amenities: selectedAmenities,
    };

    

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${room._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(updatedRoom),
      }
    );

    const data = await res.json();

    console.log(data);
  };

  return (
    <Modal>
      <Button
        variant="outline"
        className="rounded-xl"
      >
        <BiEdit className="text-lg" />
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-3xl rounded-3xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading className="text-3xl font-bold">
                Edit Study Room
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface
                variant="default"
                className="rounded-3xl"
              >
                <form
                  onSubmit={onSubmit}
                  className="p-8 space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Room Name */}
                    <div>
                      <TextField
                        defaultValue={name}
                        name="name"
                        isRequired
                      >
                        <Label>Room Name</Label>

                        <Input
                          placeholder="Quiet Focus Room"
                          className="rounded-2xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Floor */}
                    <div>
                      <TextField
                        defaultValue={floor}
                        name="floor"
                        isRequired
                      >
                        <Label>Floor</Label>

                        <Input
                          placeholder="3rd Floor"
                          className="rounded-2xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Capacity */}
                    <div>
                      <TextField
                        defaultValue={capacity}
                        name="capacity"
                        isRequired
                      >
                        <Label>Capacity</Label>

                        <Input
                          placeholder="2-4 People"
                          className="rounded-2xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Hourly Rate */}
                    <div>
                      <TextField
                        defaultValue={hourlyRate}
                        name="hourlyRate"
                        type="number"
                        isRequired
                      >
                        <Label>
                          Hourly Rate ($)
                        </Label>

                        <Input
                          type="number"
                          placeholder="5"
                          className="rounded-2xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Image URL */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={image}
                        name="image"
                        isRequired
                      >
                        <Label>Image URL</Label>

                        <Input
                          type="url"
                          placeholder="https://example.com/image.jpg"
                          className="rounded-2xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
                        <Label>Description</Label>

                        <TextArea
                          rows={5}
                          placeholder="Write room description..."
                          className="rounded-3xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h2 className="text-lg font-semibold mb-5">
                      Amenities
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {amenitiesList.map((item) => (
                        <label
                          key={item}
                          className="flex items-center gap-3 border border-gray-200 bg-gray-50 rounded-2xl px-4 py-4 cursor-pointer hover:border-primary duration-300"
                        >
                          <input
                            type="checkbox"
                            checked={selectedAmenities.includes(
                              item
                            )}
                            onChange={() =>
                              handleAmenities(item)
                            }
                            className="checkbox checkbox-primary"
                          />

                          <span className="font-medium">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <Modal.Footer>
                    <Button
                      variant="outline"
                      slot="close"
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      color="primary"
                    >
                      Update Room
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}