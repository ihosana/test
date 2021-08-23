import React, { Component } from 'react';
import {Text,View,ScrollView,TouchableOpacity, Image, ImageBackground} from 'react-native';
let img1 = require("../images/img1.png")
let img2 = require("../images/img2.png")
let img3 = require("../images/img3.png")

export default class MyList extends Component {
    constructor(props){
    super(props);
    this.state = {
       loading: false,
       data: [],
       current_page: 1,
       imagem:[img1, img2, img3],
       error: null,
       hasMore: true,
       
     }}
     
     componentDidMount(){
          this.getListOfData();
          this.isCloseToBottom();
         };

     getListOfData = () => {
        if (this.state.loading) { return; }
        this.setState({ loading: true });
        let newData = [];
        newData.push({
            title: "Lorem ipsum", 
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in congue risus, non viverra tellus. Nam faucibus ligula non metus ultrices mollis. Cras dolor purus, hendrerit eu eros quis, dignissim eleifend mi. In tincidunt mi in diam egestas congue ac ut purus. Nulla semper libero vitae blandit vehicula.",
            image: this.state.img1,
            id: this.state.data.length
        });
        newData.push({
            title: "Curabitur vulputate", 
            text: "Curabitur vulputate enim in lacus imperdiet, a convallis odio posuere. Nulla id ex et purus sodales rutrum non eu eros. Ut consequat est lacus.",
            image: this.state.img2,
            id: this.state.data.length+1
        });
        newData.push({
            title: "Proin hendrerit", 
            text: "Proin hendrerit nisl id turpis bibendum, sit amet scelerisque augue elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a blandit sapien.",
            image: this.state.img3,
            id: this.state.data.length+2
        });
        this.setState({
            hasMore: true,        
            data: [...this.state.data, ...newData],
            loading: false,
            current_page: this.state.current_page + 1,
           
        });
       
    }

    isCloseToBottom( layoutMeasurement, contentOffset, contentSize ) {   
        return (layoutMeasurement + contentOffset
        >= contentSize - 50); 
    }
    renderList = () => {
        return ( this.state.data.map((u) => {
          return ( 
            <TouchableOpacity key={u.id}>
                    <View style={{ padding: 10 }}>
                        <Image style={{width:200, height:180, backgroundColor:"black"}} 
                        
                        source={u.image}/>   
                      
                       <Text style={{ fontSize: 15}}>{u.title}</Text>        
                       <Text>{u.text}</Text>
                    </View>
             </TouchableOpacity>);
            })
       );
      }

    render() {
        return (
          <ScrollView onScroll={({ nativeEvent }) => {
            if (this.isCloseToBottom(nativeEvent) && this.state.hasMore) {                
                 this.getListOfData(); }}}> 
            {this.renderList()} 
          </ScrollView>
          );
      }

}