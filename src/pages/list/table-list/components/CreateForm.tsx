import React from 'react';
import { Input, Modal, Form } from 'antd';
import { FormComponentProps } from 'antd/es/form';

const FormItem = Form.Item;

interface CreateFormProps extends FormComponentProps {
  modalVisible: boolean;
  handleAdd: (
    fieldsValue: {
      desc: string;
    },
  ) => void;
  handleModalVisible: () => void;
}
const CreateForm: React.SFC<CreateFormProps> = props => {
  const { modalVisible, form, handleAdd, handleModalVisible } = props;
  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      handleAdd(fieldsValue);
    });
  };
  return (
    <Modal
      destroyOnClose
      title="Create Future"
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => handleModalVisible()}
    >
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="Name">
        {form.getFieldDecorator('desc', {
          rules: [{ required: true, message: 'Name Length must > 5', min: 5 }],
        })(<Input placeholder="Input" />)}
      </FormItem>
    </Modal>
  );
};

export default CreateForm;
