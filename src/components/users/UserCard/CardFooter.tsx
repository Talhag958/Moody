import ShallowRedHeartSvg from '../../../svgs/ShallowRedHeartSvg';
import EditSvg from '../../../svgs/EditSvg';
import DeleteSvg from '../../../svgs/DeleteSvg';

export const CardFooter = () => {
  return (
    <div className="card-footer d-flex justify-content-around align-items-center ">
      <ShallowRedHeartSvg />
      <div
        className="vr ms-3 me-3 align-middle"
        style={{ height: "30px" }}
      />
      <EditSvg />
      <div
        className="vr ms-3 me-3 align-middle"
        style={{ height: "30px" }}
      />
      <DeleteSvg />
    </div>
  );
};

export default CardFooter;
