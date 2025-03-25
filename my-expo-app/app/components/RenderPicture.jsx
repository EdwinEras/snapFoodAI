import FoodInfo from 'app/screens/FoodInfo';
import { ScrollView } from 'react-native';

const RenderPicture = ({ uri, setUri }) => {
  return (
    <ScrollView>
      <FoodInfo uri={uri} setUri={setUri} />
    </ScrollView>
  );
};

export default RenderPicture;
