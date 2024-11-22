/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */


/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */


export default {
    async fetch(request, env, ctx) {
      const params = {}
      const url = new URL(request.url)
      const queryString = url.search.slice(1).split('&')
    
      queryString.forEach(item => {
        const kv = item.split('=')
        //if (kv[0]) params[kv[0]] = kv[1] || true
  
        if (kv[0] === "method" && kv[1] === "deposit") {
          params['method'] = "deposit"
          params['status'] = "SUCCESS"
          
        }
        if (kv[0] === "method" && kv[1] === "withdrawal") {
          params['method'] = "withdrawal"
          params['status'] = "SUCCESS"
          
        }
        if (kv[0] === "method" && kv[1] === "account_creation") {
          params['method'] = "account_creation"
          params['status'] = "SUCCESS"
          
        }
        if (kv[0] === "method" && kv[1] === "account_details_change") {
          params['method'] = "account_details_change"
          params['status'] = "SUCCESS"
          
        }
        if (kv[0] === "method" && kv[1] === "account_login_success") {
          params['method'] = "account_login_success"
          params['status'] = "SUCCESS"
          
        }
        //else {
          //params['world'] = "hello"
        //}
      })
      return new Response(JSON.stringify(params))
      //return new Response('Hello World!');
    },
  };