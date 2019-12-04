import React from 'react';
import { render } from 'react-dom';
import UsersList from './UsersList/UsersList';
import Tabs from '../../components/Tabs/Tabs';
import {POA} from "../UserDashboardView/FormTemplates/POA";
import './AdminDashboardView.css';



function contentEditable(WrappedComponent) {

  return class extends React.Component {

    state = {
      editing: false
    }

    toggleEdit = (e) => {
      e.stopPropagation();
      if (this.state.editing) {
        this.cancel();
      } else {
        this.edit();
      }
    };

    edit = () => {
      this.setState({
        editing: true
      }, () => {
        this.domElm.focus();
      });
    };

    save = () => {
      this.setState({
        editing: false
      }, () => {
        if (this.props.onSave && this.isValueChanged()) {
          console.log('Value is changed', this.domElm.textContent);
        }
      });
    };

    cancel = () => {
      this.setState({
        editing: false
      });
    };

    isValueChanged = () => {
      return this.props.value !== this.domElm.textContent
    };

    handleKeyDown = (e) => {
      const { key } = e;
      switch (key) {
        case 'Enter':
        case 'Escape':
          this.save();
          break;
      }
    };

    render() {
      let editOnClick = true;
      const {editing} = this.state;
      if (this.props.editOnClick !== undefined) {
        editOnClick = this.props.editOnClick;
      }
      return (
        <WrappedComponent
          className={editing ? 'editing' : ''}
          onClick={editOnClick ? this.toggleEdit : undefined}
          contentEditable={editing}
          ref={(domNode) => {
            this.domElm = domNode;
          }}
          onBlur={this.save}
          onKeyDown={this.handleKeyDown}
          {...this.props}
      >
        {this.props.value}
      </WrappedComponent>
      )
    }
  }
}


class AdminDashboardView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabTitle: this.tabTitles[0],
            usersList: [],
        };
    }



    tabTitles = ['Users', 'Attorneys', 'Forms'];

    

    handleTabChange = (index, title) => {
        this.setState({tabTitle: title})
    }

    handleLogout = () => {
      fetch('/admin/logout', {
          method: 'POST',
          body: JSON.stringify({}),
          credentials: 'include',
      }).then((response) => {
          if (response.status === 200) {
              this.props.onSuccessfulLogout();
              window.location = '/login';
          }
      })
    }

    render() {
        let EditableDIV = contentEditable('div');
        let EditableH1 = contentEditable('h1');

        return (
            <div className="panel container">   
                <h1 className="panel-title">
                  {this.state.tabTitle}
                  <div id="logout-container" className="d-flex align-items-center">
                    <button onClick={this.handleLogout} className="btn btn-outline-primary">Logout</button>
                  </div>
                </h1>
                <div className="panel-content">
                                            
                    <Tabs
                        titles={this.tabTitles}
                        components={[
                            <UsersList />,
                            
                            <p>Attorneys</p>,
                            
                                <div>
                                    <EditableH1 value="Hello"/>

                                </div>


                            ]}
                        onTabChangeCallback={this.handleTabChange}
                    />
                </div>
            </div>
        )
    }
}

export default AdminDashboardView;


