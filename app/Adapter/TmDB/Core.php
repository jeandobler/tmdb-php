<?php


namespace App\Adapter\TmDB;


use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Exception\RequestException;

abstract class Core
{

    protected $key;
    protected $api_url;

    protected $options = [];
    protected $response = [
        "data" => [],
        "code" => 200,
        "message" => "success",

    ];
    /**
     * @var Client
     */
    protected $client;


    public function __construct()
    {
        $this->configure();
    }

    public function configure()
    {
        $this->key = config("services.tmdb.key");
        $this->api_url = config("services.tmdb.url");

        $this->client = app(Client::class);

        $this->options = [
            "form_params" =>
                [
                    "api_key" => $this->key
                ]
        ];
    }

    public function exception($response)
    {
        return ($response->getResponse()->getBody()->getContents());
        $return = $this->response;
        $return["code"] = $response->getResponse()->getStatusCode();
        $return["message"] = $response->getMessage();

        return $return;

    }

    protected function request($type, $url, array $data = [], array $headers = [])
    {
        try {

            if (count($headers) > 0) {
                foreach ($headers as $head => $value) {
                    $this->options['headers'][$head] = $value;
                }
            }

            if (count($data) > 0) {
                foreach ($data as $k => $item) {
                    $this->options['form_params'][$k] = $item;
                }
            }
            return $this->getResponse($this->client->request($type, $this->api_url . $url, $this->options));

        } catch (RequestException  $e) {
//            $this->getResponse($e->getResponse());
            throw $e;
        } catch (GuzzleException $e) {
            throw $e;
        }
    }

    public function getResponse($response)
    {
        return json_decode($response->getBody()->getContents());

    }

}
