#! /bin/bash

set +v
cd "${0%/*}"
node index.js
read -p "Press [ENTER] to continue . . ."
