import { AddNewRecordModalProps } from "@/types/risk-analysis";
import { Modal, Form, Input } from "antd";

const AddNewRecordModal = ({
  isNewRecordModalOpen,
  handleOk,
  handleCancel,
  form,
}: AddNewRecordModalProps) => {
  return (
    <>
      <Modal
        title="User Form"
        open={isNewRecordModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddNewRecordModal;
