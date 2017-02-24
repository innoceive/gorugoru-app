import React from 'react';
import BadgeHistoryItem from './BadgeHistoryItem';

class BadgeHistory extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        history: [{
          'id': 'history001',
          'menu': {'id': 'menu001', 'name': '김치찌개'},
          'store': {'id': 'store001', 'name': '골고루 식당'},
          'date': 1487475346403,
          'isValidated': false
        }, {
          'id': 'history002',
          'menu': {'id': 'menu002', 'name': '된장찌개'},
          'store': {'id': 'store001', 'name': '골고루 식당'},
          'date': 1487475399460,
          'isValidated': true
        }, {
          'id': 'history003',
          'menu': {'id': 'menu003', 'name': '불고기 백반'},
          'store': {'id': 'store001', 'name': '골고루 식당'},
          'date': 1487475412966,
          'isValidated': true
        }]
      };
    }

    render() {
      const mapToComponents = (data) => {
        window.historyData = data;
        data.sort((a, b) => { return b.date - a.date; }); // 최신순으로 정렬

        return data.map((item, i) => {
          return (<BadgeHistoryItem
                      key={item.id}
                      menu={item.menu}
                      store={item.store}
                      date={item.date}
                      isValidated={item.isValidated}
                      />);
        });
      };

        let style = {
          listStyle: "none",
          padding: "0px",
          margin: "0px",
          borderStyle: "solid",
          borderWidth: "0px 0px 1px 0px",
          borderColor: "#dfdfdf"
        };

        return (
          <ul style={style}>{mapToComponents(this.state.history)}</ul>
        );
    }
}

export default BadgeHistory;