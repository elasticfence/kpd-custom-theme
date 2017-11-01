module.exports = function (kibana) {
	return new kibana.Plugin({
		uiExports: {
			hacks: [
				'plugins/kpd_custom_theme/hacks'
			],
			injectDefaultVars: function(server) {
			  const config = server.config();
			  return {
			    CSS: config.get('css'),
			    FAVICON: config.get('favicon')
			  };
			}
		},
		config: function (Joi) {
		        return Joi.object({
 		          enabled: Joi.boolean().default(true),
  		          css: Joi.string().default('plugins/kpd_custom_theme/css/style.less'),
			  favicon: Joi.string().default('./images/logo.png')
			}).default()
		}
	})
}
