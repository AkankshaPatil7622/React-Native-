
function Basic()
{
    return(
        // ***********************************************
  //  module 1 state-->const [name, setName] = useState("");
  // const [subject, setSubject] = useState({
  //   number: 7,
  //   title: "react native",
  // });
  // const [current, setCurrent] = useState(true);
  // const changeName = () => {
  //   setName(" Akanksha Vinod Patil");
  //   setSubject({ number: 8, title: "react js" });
  //   setCurrent(false);  module 1 state end
  // ****************************************************

  // module 2 start-->
  // const [point, setPoint] = useState(0);
  // const [count, setCount] = useState(0);
  // const clickInfo = () => {
  //   setPoint(point + 5);
  //   setCount(count + 1);
  // };
  // module 2 end



//<View style={styles.backG}>
    //       {/* module 1 start <Text>hello, {name}</Text>
    //       <Text>
    //         {current ? "current session" : "next session"} {subject.title}
    //       </Text>
    //       <Text>and lecture number is : {subject.number}</Text>
    //       <Button title="Say Hello !" onPress={changeName}></Button>  module 1 end */}

    //       {/* home workkkk yahooooo !!! */}

    //       {/*module 2 start-> <Text style={styles.text}>{point}</Text>
    //       <Button title="Add" onPress={clickInfo}></Button>
    //       <Text style={styles.text}>Button is clicked {count} times ohoo !!</Text> module 2 end*/}
    // </View>

    // module 3 -->
    // responsive UI with flexbox
    <View>
     <View style={styles.view1}>
       <Text>1</Text>
     </View>
     <View style={styles.view2}>
       <Text>2</Text>
     </View>
     <View style={styles.view3}>
      <Text>3</Text>
      </View>
      <View style={styles.view4}>
        <Text>4</Text>
      </View>
      <View style={styles.view2}>
        <Text>5</Text>
      </View>
      <View style={styles.view3}>
        <Text>6</Text>
      </View>
      <View style={styles.view3}>
        <Text>7</Text>
      </View>
    </View>

    // homework 2 -->

    // module 3 end***************
  );
}
// style for module 1 -->
//const styles = StyleSheet.create({
    //   backG: {
    //    flex : 1,
    //     backgroundColor: "yellow",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     borderWidth: 20,
    //     borderRadius: 10,
    //     borderColor: "purple",
    //     margin : 30,
    //   },
    //   text: {
    //     fontSize: 20,
    //     color: "black",
    //     fontWeight: 700,
    //   },
    
    // });
    
// style for module 2

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    view1: {
      backgroundColor: "yellow",
      height: 100,
      width: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    view2: {
      backgroundColor: "pink",
      height: 100,
      width: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    view3: {
      backgroundColor: "gray",
      height: 100,
      width: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    view4: {
      backgroundColor: "green",
      height: 100,
      width: 100,
    },
  });
  