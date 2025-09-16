interface IProps{
  children: React.ReactNode
}

const CommonLayout = ({children}:IProps) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default CommonLayout;