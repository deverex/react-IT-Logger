import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteTech } from "../../actions/techActions";

import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech: { firstName, lastName, id }, deleteTech }) => {
  const onDelete = () => {
    deleteTech(id);
    M.toast({ html: "Technician Deleted" });
  };

  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired
};

export default connect(null, { deleteTech })(TechItem);
