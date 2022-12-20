CUR_SPACE=.

version=`grep -E "\"version\":\s?\".*\"" package.json | sed s/[^0-9.]//g`;
versionCode=`grep -E "\"versionCode\":\s?\".*\"" package.json | sed s/[^0-9.]//g`;
echo "Infusing version $version-$versionCode to environment files & ios project.pbxproj";

sed -i -e 's/REACT_APP_APP_VERSION_CODE=.*/REACT_APP_APP_VERSION_CODE='$versionCode'/' $CUR_SPACE/.env.development
sed -i -e 's/REACT_APP_APP_VERSION_CODE=.*/REACT_APP_APP_VERSION_CODE='$versionCode'/' $CUR_SPACE/.env.production
sed -i -e 's/REACT_APP_APP_VERSION_CODE=.*/REACT_APP_APP_VERSION_CODE='$versionCode'/' $CUR_SPACE/.env.staging

sed -i -e 's/REACT_APP_APP_VERSION_NAME=.*/REACT_APP_APP_VERSION_NAME='$version'/' $CUR_SPACE/.env.development
sed -i -e 's/REACT_APP_APP_VERSION_NAME=.*/REACT_APP_APP_VERSION_NAME='$version'/' $CUR_SPACE/.env.production
sed -i -e 's/REACT_APP_APP_VERSION_NAME=.*/REACT_APP_APP_VERSION_NAME='$version'/' $CUR_SPACE/.env.staging

find . -name *.*-e -exec rm -rf {} \;
