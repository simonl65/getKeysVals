const nodes = [
  {
    "id": 1526297177970,
    "text": "Some top-level item",
    "nodes": [
      {
        "id": 1526297185466,
        "tags": [1],
        "text": "text1",
        "state": { "checked": true, "expanded": true },
        "filePath": "path1.CSV"
      },
      {
        "id": 1526297195199,
        "tags": [1],
        "text": "Some sub-node",
        "nodes": [
          {
            "id": 1526297202132,
            "tags": [1],
            "text": "text2",
            "state": { "checked": true, "expanded": true },
            "filePath": "path2.CSV"
          },
          {
            "id": 1526297209980,
            "tags": [1],
            "text": "text3",
            "state": { "checked": true, "expanded": true },
            "filePath": "path3.CSV"
          }
        ],
        "state": { "checked": true }
      }
    ],
    "state": { "checked": true }
  }
];

// Let's display only the id, text and filePath, recursing through any nested
// "nodes" objects:
// e.g.:
// [
//  {id:123, text:"text1", filePath:"path1"},
//  {id:456, text:"text2", filePath:"path2"}
// ]
result = getKeysVals(nodes[0].nodes, ['id', 'text', 'filePath'], 'nodes');
console.log("RESULT:\n",result);

result = getKeysVals(nodes[0].nodes, ['id', 'filePath']);
console.log("RESULT:\n",result);


/**
 * Returns array containing only the keys and values requested.
 * @param {object}  obj     (Nested) object that we want to search through.
 * @param {array}   keys    Array of **mandatory** keys to return.
 * @param {string}  recurse [optional] object with sub-objects to look within.
 */
function getKeysVals(obj, keys, recurse = false)
{
  let addToOutput = true;
  let out         = [];
  let cnt         = 0;

  obj.map
  (
    (thisObj) =>
    {
      let newObj = {};  // Temp holder for new object that gets added to output.
      
      // Loop through the requested keys, adding them to the new object:
      for( i in keys)
      {
        // Check that this key has a value:
        if(!thisObj[keys[i]])
        {
          addToOutput = false;
          break;
        }
        else
        {
          newObj[keys[i]] = thisObj[keys[i]];
        }
      }

      // Ensure we have values for ALL the requested keys in this object:
      if( addToOutput )
      {
        out.push(newObj);
      }

      // Go round again if this object has the specified recurse object:
      if( thisObj[recurse] )
      {
        out.push(...getKeysVals(thisObj[recurse], keys, recurse));
      }
    }
  );
  return out
}

