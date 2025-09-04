using UnityEngine;

public class DestroyOutOfBounds : MonoBehaviour
{
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    public float leftBoundary = 10;
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        if (transform.position.x < -leftBoundary)
        {
            Destroy(gameObject);
        }
    }
}
