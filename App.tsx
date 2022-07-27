import { View, Text, StatusBar, Dimensions, SafeAreaView } from "react-native";
import RNPoll, { IChoice } from "react-native-poll";
import RNAnimated from "react-native-animated-component";

const { width: ScreenWidth } = Dimensions.get("window");

const choices: Array<IChoice> = [
  { id: 1, choice: "Nike", votes: 14 },
  { id: 2, choice: "Adidas", votes: 5 },
];

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        <View>
          <Text
            style={{
              marginTop: 75,
              fontSize: 25,
              fontFamily: "Open Sans",
            }}
          >
            What is your favorite sport brand?
          </Text>
          <View
            style={{
              width: ScreenWidth * 0.9,
            }}
          >
            <RNPoll
              appearFrom="top"
              totalVotes={20}
              animationDuration={750}
              choices={choices}
              PollContainer={RNAnimated}
              PollItemContainer={RNAnimated}
              choiceTextStyle={{
                fontFamily: "SuezOne-Regular",
              }}
              onChoicePress={(selectedChoice: IChoice) =>
                console.log("SelectedChoice: ", selectedChoice)
              }
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
