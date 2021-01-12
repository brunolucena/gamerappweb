import NotificationsIcon from '@material-ui/icons/Notifications';

interface Props {
  iconColor?: string;
}

const Notification: React.FC<Props> = ({ iconColor }) => {
  return <NotificationsIcon style={{ color: iconColor || '#919191' }} />;
};

export default Notification;
