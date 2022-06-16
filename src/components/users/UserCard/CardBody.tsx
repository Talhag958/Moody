import MailSvg from '../../../svgs/MailSvg';
import CallSvg from '../../../svgs/CallSvg';
import InternetSvg from '../../../svgs/InternetSvg';

export const CardBody = (props: {
  name: string,
  email: string,
  phone: string,
  website: string
}) => {
  const { name, email, phone, website } = props;
  return (
    <div className="card-body">
      <h5 className="card-title m-3">{name}</h5>
      <div className="d-flex m-2 ms-3 align-items-baseline text-break">
        <MailSvg />
        <h6 className="card-subtitle text-muted ">{email}</h6>
      </div>
      <div className="d-flex m-2 ms-3 align-items-baseline ">
        <CallSvg />
        <h6 className="card-subtitle text-muted ">{phone}</h6>
      </div>
      <div className="d-flex m-2 ms-3 align-items-baseline text-break">
        <InternetSvg />
        <h6 className="card-subtitle text-muted ">{website}</h6>
      </div>
    </div>
  );
};

export default CardBody;
