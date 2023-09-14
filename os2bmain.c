#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>

void bubbleSort(int arr[], int n) {
    int temp;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int arr[] = {12, 11, 10, 5, 6};

    int n = sizeof(arr) / sizeof(arr[0]);

    int pid;
    pid = fork();

    if (pid == 0) {
        // Child process
        char *args[n + 2];
        args[0] = "./display_reverse";
        args[n + 1] = NULL;

        for (int i = 0; i < n; i++) {
            args[i + 1] = (char *)malloc(20);
            sprintf(args[i + 1], "%d", arr[i]);
        }

        execve(args[0], args, NULL);
    } else {
        // Parent process
        wait(NULL);

        // Sort the array
        bubbleSort(arr, n);

        // Display the sorted array
        printf("Sorted Array: ");
        for (int i = 0; i < n; i++) {
            printf("%d ", arr[i]);
        }
        printf("\n");
    }

    return 0;
}
