import React from 'react';
import './education.scss';

export default class Education extends React.Component {
  render() {
    return (
      <div>
        <div className="education">
          <h2>Education Value</h2>
          <div className="history">
            <div className="line"></div>
            <div className="history-list">
              <div className="item">
                <div className="item__card">
                  <span>UNIVERSITY OF DESIGN</span>
                  <h4>MASTER DEGREE OF DESIGN</h4>
                </div>
                <div className="point"></div>
                <div className="duration">
									2005 - 2006
                </div>
              </div>
              <div className="item">
                <div className="item__card">
                  <span>UNIVERSITY OF DESIGN</span>
                  <h4>MASTER DEGREE OF DESIGN</h4>
                </div>
                <div className="point"></div>
                <div className="duration">
									2005 - 2006
                </div>
              </div>
              <div className="item">
                <div className="item__card">
                  <span>UNIVERSITY OF DESIGN</span>
                  <h4>MASTER DEGREE OF DESIGN</h4>
                </div>
                <div className="point"></div>
                <div className="duration">
									2005 - 2006
                </div>
              </div>
              <div className="item">
                <div className="item__card">
                  <span>UNIVERSITY OF DESIGN</span>
                  <h4>MASTER DEGREE OF DESIGN</h4>
                </div>
                <div className="point"></div>
                <div className="duration">
									2005 - 2006
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hobbies">
          <h2>
						Hobbies & Interest
          </h2>
          <div className="hobbies-list">
            <div className="hobbies-list__card">
              <div className="icon-box">
                <ion-icon name="easel"></ion-icon>
              </div>
							WEB RESEARCH
            </div>
            <div className="hobbies-list__card">
              <div className="icon-box">
                <ion-icon name="ios-camera"></ion-icon>
              </div>
							PHOTOGRAPHY
            </div>
            <div className="hobbies-list__card">
              <div className="icon-box">
                <ion-icon name="airplane"></ion-icon>
              </div>
							TRAVELLING
            </div>
            <div className="hobbies-list__card">
              <div className="icon-box">
                <ion-icon name="ios-bookmarks"></ion-icon>
              </div>
							BOOK READING
            </div>
            <div className="hobbies-list__card">
              <div className="icon-box">
                <ion-icon name="ios-musical-notes"></ion-icon>
              </div>
							MUSIC
            </div>
          </div>
        </div>
      </div>
    );
  }
}
