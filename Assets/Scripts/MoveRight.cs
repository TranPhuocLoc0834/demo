using UnityEngine;

public class MoveRight : MonoBehaviour
{
    
   public float speed = 30;
    private PlayerController playerControllerScripts;
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        playerControllerScripts = GameObject.Find("player").GetComponent<PlayerController>();
    }

    // Update is called once per frame
    void Update()
    {
        if (playerControllerScripts.gameOver == false)
        {
            transform.Translate(Vector3.forward * speed * Time.deltaTime);
        }
    }
}
