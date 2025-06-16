import { FontAwesome, Ionicons } from "@expo/vector-icons";

interface IIconsProps {
  focused: boolean;
}

const INACTIVE_SIZE = 26;
const ACTIVE_SIZE = 30;
const INACTIVE_COLOR = "#900059";
const ACTIVE_COLOR = "#900059";

const RankIcon = (props: IIconsProps) => {
  const { focused } = props;

  return focused ? (
    <Ionicons name="podium" color={ACTIVE_COLOR} size={ACTIVE_SIZE} />
  ) : (
    <Ionicons
      name="podium-outline"
      color={INACTIVE_COLOR}
      size={INACTIVE_SIZE}
    />
  );
};

const HeartIcon = (props: IIconsProps) => {
  const { focused } = props;

  return focused ? (
    <FontAwesome name="heart" color={ACTIVE_COLOR} size={ACTIVE_SIZE} />
  ) : (
    <FontAwesome name="heart-o" color={INACTIVE_COLOR} size={INACTIVE_SIZE} />
  );
};

const UserIcon = (props: IIconsProps) => {
  const { focused } = props;

  return focused ? (
    <Ionicons name="person" color={ACTIVE_COLOR} size={ACTIVE_SIZE} />
  ) : (
    <Ionicons
      name="person-outline"
      color={INACTIVE_COLOR}
      size={INACTIVE_SIZE}
    />
  );
};

export { RankIcon, HeartIcon, UserIcon };
