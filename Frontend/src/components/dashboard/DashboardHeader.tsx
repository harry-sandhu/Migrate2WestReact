type Props = {
  title: string;
  action?: React.ReactNode;
};

const DashboardHeader = ({ title, action }: Props) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-gray-900">
        {title}
      </h1>

      {action && (
        <div className="flex items-center gap-3">
          {action}
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
