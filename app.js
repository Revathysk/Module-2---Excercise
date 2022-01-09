
class Reviews extends React.Component {
    render(){
        return(
            <div> 
                <h2>Reviews</h2> <br></br> 
                <h3> 1,281</h3 ><br></br>                 
            </div>
        )
    }
}
class AverageRating extends React.Component {
    render(){
        return(
            <div> 
                <h2>Average Rating</h2> <br></br> 
                <h3> 4.6 </h3 ><br></br>                 
            </div>
        )
    }
}
 
class Sentiment extends React.Component {
    render(){
        return(
            <div> 
                <h2>Sentiment Analysis</h2> <br></br> 
                <div id='datapoints'>
                    <ul >
                    <h3> 960 </h3 ><br></br>                 
                    <h3> 122 </h3 ><br></br>                 
                    <h3> 321 </h3 ><br></br>                 
                    </ul>
                </div>
            </div>
        )
    }
}
 
class SideBar extends React.Component {
    render(){
        return(
            <div> 
                <h2>Dashboard</h2> <br></br> 
                <h2>Widgets</h2><br></br> 
                <h2>Reviews</h2><br></br> 
                <h2>Customers</h2><br></br> 
                <h2>Online Analysis</h2><br></br> 
                <h2>Settings</h2> <br></br> 
            </div>
        )
    }
}

class WebsiteVisitors extends React.Component {
    render(){
        return(
            <div> 
                <h2>Website Visitors</h2> <br></br> 
                <h3> 821</h3 ><br></br>
                <div id ='Web-innerDiv' ></div>                 
            </div>
        )
    }
}
 class App extends React.Component {
     render(){
         return(                            
            <div id='mainpage'>
                <div class='sidebar'> <SideBar/>  </div>
                <div class='middle-container'>
                    <div class='data'> <Reviews/>  </div>            
                    <div class='data'> <AverageRating/>  </div>            
                    <div class='data'> <Sentiment/>  </div>            
                    <div class='WebVisitor'> <WebsiteVisitors/>                          
                    </div>            
                </div>
            </div>             
         )
     }
 }

//  ReactDOM.render(
//      <App/>,
//      document.querySelector("#main-container")
//  )

ReactDOM.render(    
    <App/>,
    document.querySelector('main')
  );