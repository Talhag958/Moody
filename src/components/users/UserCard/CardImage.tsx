export const CardImage = (props: { avatar: any }) => {
  return (
    <img
      src={`data:image/svg+xml;utf8,${encodeURIComponent(
        props.avatar
      )}`}
      className="card-img-top bg-light"
      alt="..."
      style={{ height: "200px" }}
      data-testid="avatar-img"
    />
  );
};

export default CardImage;
