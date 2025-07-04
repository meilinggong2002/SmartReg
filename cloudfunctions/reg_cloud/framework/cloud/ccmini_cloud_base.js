// +----------------------------------------------------------------------
// | CCMiniCloud [ Cloud Framework ]
// +----------------------------------------------------------------------
// | Copyright (c) 2021 www.code942.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 明章科技
// +----------------------------------------------------------------------
 
/**
 * Notes: 云初始化实例
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY www.code942.com
 * Date: 2025-09-05 04:00:00
 * Version : CCMiniCloud Framework Ver 2.0.1 ALL RIGHTS RESERVED BY 明章科技
 */

const ccminiConfig = require('../../comm/ccmini_config.js');
 
function getCloud() {
	const cloud = require('wx-server-sdk');
	cloud.init({
		env: cloud.DYNAMIC_CURRENT_ENV
	});
	return cloud;
}

module.exports = {
	getCloud
}