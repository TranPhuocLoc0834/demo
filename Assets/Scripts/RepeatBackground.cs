using UnityEngine;

public class RepeatBackground : MonoBehaviour
{
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    public Vector3 startPos = new Vector3();
    public float repeatWidth;
    void Start()
    {
        startPos = transform.position;
        repeatWidth = GetComponent<BoxCollider>().size.x;
    }

    // Update is called once per frame
    void Update()
    {
        if (transform.position.x < startPos.x  - repeatWidth/2)
        {
            transform.position = startPos;
        }
    }
}
