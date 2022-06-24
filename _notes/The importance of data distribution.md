---
title: The importance of data distribution. The Normal Distribution
---

Plotting the data and viewing it's distribution is one of the most important things to do when examining a new dataset. 

Ideally, the data we are facing is normally distributed. This is an important characteristic as the vast majority of parametric statistical tests, such as ANOVA or linear regression, assume the data to follows the normal distribution.



## Normal distribution

This distribution has some important properties, like the fact that it is **symmetric, the mean is the same as the median and that it is a continuous distribution**.

### Area and probability under the curve

The areas are always constant attending to σ so the area under a given value of sigma will always be the same.

As seen in the figure below:
-  68.2% of the data is within the interval [-1, 1]
-  95.4% of the data is within the interval [-2, 2]
-  99.7% of the data is within the interval [-3, 3]

![Normal distribution area](/assets/normal_distribution_wikimedia.png "Normal distribution area")


As we have stated before, it's interesting that the data is normally distributed, so let's see how to identify it. 

In real world data, the plotting won't be so perfect as in the definition, but we can spot it quite easily seeing it's shape. Here we generate a random normal distribution with mean 3 and standard deviation 1. 

```python
mu, sigma = 3., 1. # mean and standard deviation
normal_dist = np.random.normal(mu, sigma, 1000)

plt.hist(normal_dist, 100, density=True, align='mid')
plt.show()
```

![Normal distribution](/assets/normal_distribution.png "Normal distribution")

As we can see, the data is centered around 3 and the standard deviation of 1 (-1σ and +1σ) has the 68% of the data inside the interval. It has the **typical bell shape**

## Log-normal distribution

We have seen that normal distributions are suitable to work with, but that will not always be the case.
Sometimes we will have data that is not normally distributed, like the following one:

```python
mu, sigma = 3., 1. # mean and standard deviation
ln_dist = np.random.lognormal(mu, sigma, 1000)

plt.hist(s, 100, density=True, align='mid')
plt.show()
```
![Log-Normal distribution](/assets/log_normal_distribution.png "Log-Normal distribution")

That's a **log-normal distribution** created randomly with a mean of 3 and a standard deviation of 1.
It is common to have this kind of data in the real world when working with biological data for example. 
The data is clearly skewed to the left, not showing a bell shape.

In these cases we can **transform the data to a normal distribution** using the log-normal distribution, so that we can benefit from the normal distribution properties.

```python	
transformed_ln_dist = np.log(ln_dist)
plt.hist(transformed_ln_dist, 100, density=True, align='mid')
```
![Log-Transformed distribution](/assets/log_transformed_data.png "Log-Transformed distribution")

After the transformation is applied, now the shape of the distribution resembles the normal distribution and we can use it into our predictive models.

