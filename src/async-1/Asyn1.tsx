import DataTreeExample from './dataTreeExample';
import CreateInput from './dataTreeExample/component/CreateInput';
import { validationSchemaFolder } from './dataTreeExample/utils';
import UserAsync from './userInfoExample/UserAsync';

function Asyn1() {
  return (
    <div className="max-w-xl w-full flex-shrink-0 m-auto min-h-screen pb-20  pt-10">
      <UserAsync />
      {/* <hr className="my-4 h-1" /> */}
      <div className="h-[1px] w-full bg-black my-4"></div>
      <DataTreeExample />
      <div className="h-[1px] w-full bg-black my-4"></div>
      <h2>Input Create Folder with Formik</h2>
      <CreateInput type="folder" validationShema={validationSchemaFolder} />
      <CreateInput type="file" />
    </div>
  );
}

export default Asyn1;
