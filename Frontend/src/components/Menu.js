import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMenus } from "../actions/menuAction";
import { getRestaurants } from "../actions/restaurantAction";
import Fooditem from "../components/Fooditem";
import { setRestaurantId } from "../actions/cartActions";

const Menu = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { menus, loading, error } = useSelector((state) => state.menus);

  useEffect(() => {
    // Move the dispatch inside the useEffect
    dispatch(setRestaurantId(id));
    dispatch(getMenus(id));
    dispatch(getRestaurants());
  }, [dispatch, id]); // Only re-run the effect if dispatch or id changes

  return (
    <div>
      {loading ? (
        <p>Loading menus...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : menus && menus.length > 0 ? (
        menus.map((menu) => (
          <div key={menu._id}>
            <h2>{menu.category}</h2>
            <hr />
            {menu.items && menu.items.length > 0 ? (
              <div className="row">
                {menu.items.map((fooditem) => (
                  <Fooditem key={fooditem._id} fooditem={fooditem} />
                ))}
              </div>
            ) : (
              <p>No menus available</p>
            )}
          </div>
        ))
      ) : (
        <p> No menus Available</p>
      )}
    </div>
  );
};

export default Menu;
