import * as Form from '@radix-ui/react-form';
// import styles from './zodiacInfo.module.css';
import './zodiacInfo.css';

export default function BirthInfoForm () {
  return (
    // <Form.Root>
    //   <Form.Field name="name">
    //     <Form.Label>姓名</Form.Label>
    //     <Form.Control asChild>
    //       <input type="text" required />
    //     </Form.Control>
    //   </Form.Field>

    //   <Form.Field name="birthdate">
    //     <Form.Label>出生日期</Form.Label>
    //     <Form.Control asChild>
    //       <input type="date" required />
    //     </Form.Control>
    //   </Form.Field>

    //   {/* Add more fields for time, location, etc. */}

    //   <Form.Submit asChild>
    //     <button type="submit">生成星盤</button>
    //   </Form.Submit>
    // </Form.Root>
    <Form.Root className="FormRoot">
      <Form.Field className="FormField" name="email">
        <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
          <Form.Label className="FormLabel">Email</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your email
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="email" required />
        </Form.Control>
      </Form.Field>
      <Form.Field className="FormField" name="question">
        <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
          <Form.Label className="FormLabel">Question</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter a question
          </Form.Message>
        </div>
        <Form.Control asChild>
          <textarea className="Textarea" required />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className="Button" style={{marginTop: 10}}>
          Post question
        </button>
      </Form.Submit>
    </Form.Root>
  );
}