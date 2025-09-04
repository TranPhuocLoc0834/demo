using UnityEngine;

public class SpawnObstacles : MonoBehaviour
{
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    private Vector3 spawnPos = new Vector3(25, 0, 0);
    public GameObject[] obstaclesPrefab;
    public GameObject background;
    public float startDelay = 3;
    private PlayerController playerControllerScripts;
    void Start()
    {
        InvokeRepeating("SpawnManager", startDelay, 4);
        playerControllerScripts = GameObject.Find("player").GetComponent<PlayerController>();

    }

    // Update is called once per frame
    void Update()
    {

    }
    private void SpawnManager() {   
        if (playerControllerScripts.gameOver == false)
        {
            int obstacle = Random.Range(0, 4);
            //Instantiate(background, spawnPos, background.transform.rotation);
            Instantiate(obstaclesPrefab[obstacle], spawnPos, obstaclesPrefab[obstacle].transform.rotation);
        }
    }

}
