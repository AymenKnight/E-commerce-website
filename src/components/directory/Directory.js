import React from 'react'
import MenuItem from "../menu_item/MenuItem";
import "./directory.styles.scss"
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import  {selecteDirectorySections} from "../../redux/directory/directory.selectors"



 const Directory = ({ sections }) => {
   return (
     <div className="directory_menu">
       {sections.map(({ id, imageUrl, linkUrl, title, size }) => (
         <MenuItem
           title={title}
           key={id}
           imageUrl={imageUrl}
           size={size}
           linkUrl={linkUrl}
         />
       ))}
     </div>
   );
 };

 const mapStateToProps = createStructuredSelector({
   sections: selecteDirectorySections ,
 });

export default connect(mapStateToProps)(Directory);

