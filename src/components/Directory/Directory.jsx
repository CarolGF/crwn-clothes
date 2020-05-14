import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory-selectors";

import MenuItem from "../Menu-Item/Menu-Item";
import { DirectoryMenu } from "./Directory-styles";

const Directory = ({ sections }) => (
  <DirectoryMenu>
    {sections.map(({ id, ...otherSectionsParams }) => {
      return <MenuItem key={id} {...otherSectionsParams} />;
    })}
  </DirectoryMenu>
);

const mapStatetoProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStatetoProps)(Directory);
