import './App.css'
import Car from "./components/Car";
import Users from "./components/Users";

function App(){
    return(
      <div>
          {/*<div>*/}
          {/*   <Car*/}
          {/*       name={'bmw'}*/}
          {/*       img={'https://upload.wikimedia.org/wikipedia/commons/6/61/BMW_318d_GT_Modern_Line_%28F34%29_%E2%80%93_Frontansicht%2C_31._August_2013%2C_M%C3%BCnster.jpg'}*/}
          {/*   />*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*    <Car*/}
          {/*        name={'audi'}*/}
          {/*        img={'https://audimediacenter-a.akamaihd.net/system/production/media/87616/images/0a97eddd101412af17dd924c312b710dae15ff61/A1915489_blog.jpg?1582587077'}*/}
          {/*    />*/}
          {/*</div>*/}
          <Users/>
      </div>
    );
}

export default App;