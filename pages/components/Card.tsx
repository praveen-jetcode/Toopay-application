export const Card = ({ Header, children }: any) => {
  return (
    <>
      <div className="card">
        <div className="card-header">{Header}</div>
        <div className="card-body">{children}</div>
      </div>
    </>
  );
};

export const Card2 = ({ Header, children }: any) => {
  return (
    <>
      <div className="card">
        <div className="card-header">{Header}</div>
        <div className="cards">{children}</div>
      </div>
    </>
  );
};
