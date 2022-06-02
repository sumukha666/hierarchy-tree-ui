import React from "react";

function TreeView(props) {
  const { list, onViewChilds, getChildren, parentDetails } = props;

  return (
    <>
      {list.map((elem) =>
        elem.isParent ? (
          <div
            key={elem.value}
            className={`mr-l-${elem.depth} dsp-flex dsp-column `}
          >
            <div className="dsp-flex">
              <button onClick={() => onViewChilds(elem, parentDetails)}>
                +
              </button>
              <div className="mr-l-0_5">{elem.value}</div>
            </div>
            {elem.showChild && (
              <TreeView
                key={elem.value}
                list={getChildren(elem, parentDetails)}
                getChildren={getChildren}
                onViewChilds={onViewChilds}
                parentDetails={elem}
              />
            )}
          </div>
        ) : (
          <div key={elem.value} className={`mr-l-${elem.depth}`}>
            {elem.value}
          </div>
        )
      )}
    </>
  );
}

export default TreeView;
