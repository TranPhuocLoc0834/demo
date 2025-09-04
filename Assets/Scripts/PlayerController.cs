using UnityEngine;

public class PlayerController : MonoBehaviour
{
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    private Rigidbody playerRb;
    public ParticleSystem explosion;
    public ParticleSystem dirt;
    public float jumpForce = 10;
    public float gravityModifier;
    public bool isOnGround = true;
    public bool gameOver;
    private Animator playerAnimation;
    public AudioSource playerSound;
    public AudioClip jump;
    public AudioClip crash;
    public GameObject projectilePrefab;
    void Start()
    {
        playerRb = GetComponent<Rigidbody>();
        playerAnimation = GetComponent<Animator>();
        playerSound = GetComponent<AudioSource>();
        Physics.gravity *= gravityModifier;
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space) && isOnGround && gameOver != true)
        {
            playerRb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
            playerAnimation.SetTrigger("Jump_trig");
            dirt.Stop();
            playerSound.PlayOneShot(jump, 1.0f);
            isOnGround = false;
        }
        if (Input.GetKeyDown(KeyCode.Mouse0))
        {
            Instantiate(projectilePrefab, transform.position + new Vector3(0.3f,1.5f,0), projectilePrefab.transform.rotation);

        }
    }

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Ground"))
        {
            dirt.Play();
            playerAnimation.SetBool("Grounded", true);
            isOnGround = true;
        } else
        {
            playerAnimation.SetBool("Grounded", false);
        }
        if (collision.gameObject.CompareTag("Obstacles"))
        {
            Debug.Log("Game Over!");
            explosion.Play();
            playerAnimation.SetBool("Death_b", true);
            playerAnimation.SetInteger("DeathType_int", 2);
            dirt.Stop();
            playerSound.PlayOneShot(crash, 1.0f);
            gameOver = true;
        }
    }
}
