#include <stdio.h>
void main()
{ int a[30],n,i,j;
printf("\n Enter no of elements :");
scanf("%d",&n);
printf("\n Enter %d elements :",n);
for(i=0;i < n;i++){
	scanf("%d",&a[i]);
	printf("\n location of the element to be deleted :");
	scanf("%d",&j);
}
while(j < n)
{ a[j-1]=a[j];
j++; 
}
n--;
for(i=0;i < n;i++){
	printf(“\n %d",a[i]);

}




