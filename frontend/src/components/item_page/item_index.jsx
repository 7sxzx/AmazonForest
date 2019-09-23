import React from 'react';
import ItemIndexItem from './item_index_item';

class ItemIndex extends React.Component {

	render() {
		const { items } = this.props
		let itemLists
		if (items && items[0]) {
			itemLists = items[0].map(item => <ItemIndexItem key={item._id} item={item} />)
		}
		return (
			<div className="item-index">
				<div className="item-lists">
					<ul>
						{itemLists}
					</ul>
				</div>
			</div>
		)
	}
}

export default ItemIndex;